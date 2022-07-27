import { SearchPanel } from "./search-panel";
import { List } from "./list";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { Row } from "components/lib";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
import { useProjectsSearchParams } from "./util";
import { useDebounce } from "utils";
import { ButtonNoPadding } from "components/lib";
import { projectListActions } from "./project-list.slice";
import { useDispatch } from "react-redux";

export const ProjectListScreen = () => {
  // const [keys] = useState<("name" | "personId")[]>(["name", "personId"]);
  const [param, setParam] = useProjectsSearchParams();
  const {
    isLoading,
    error,
    data: list,
    retry,
  } = useProjects(useDebounce(param, 200));

  const { data: users } = useUsers();
  const dispatch = useDispatch();

  return (
    <Container>
      <Row marginBottom={2} between={true}>
        <h1>项目列表</h1>
        <ButtonNoPadding
          onClick={() => dispatch(projectListActions.openProjectModal())}
          type={"link"}
        >
          创建项目
        </ButtonNoPadding>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        refresh={retry}
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;

const Container = styled.div`
  padding: 3.2rem;
`;
