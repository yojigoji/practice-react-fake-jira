import styled from "@emotion/styled";
import { Button, Divider, List, Popover, Row, Typography } from "antd";
import { ProjectScreen } from "screens/project";
import { useProjects } from "utils/project";

export const ProjectPopover = (props: { projectButton: JSX.Element }) => {
  const { data: projects, isLoading } = useProjects();
  const pinnedProject = projects?.filter((project) => project.pin);

  const content = (
    <ContentContainer>
      <div>
        <Typography.Text type={"secondary"}>收藏项目</Typography.Text>
        <List>
          {pinnedProject?.map((project) => (
            <List.Item>
              <List.Item.Meta title={project.name} />
            </List.Item>
          ))}
        </List>
        <Divider />
        {props.projectButton}
      </div>
    </ContentContainer>
  );
  return (
    <Popover placement="bottom" content={content}>
      项目
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;
