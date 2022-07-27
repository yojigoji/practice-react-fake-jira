import styled from "@emotion/styled";
import { Divider, List, Popover, Typography } from "antd";
import { useDispatch } from "react-redux";

import { projectListActions } from "screens/project-list/project-list.slice";
import { useProjects } from "utils/project";
import { ButtonNoPadding } from "./lib";

export const ProjectPopover = () => {
  const dispatch = useDispatch();
  const { data: projects } = useProjects();
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
        <ButtonNoPadding
          onClick={() => dispatch(projectListActions.openProjectModal())}
          type={"link"}
        >
          创建项目
        </ButtonNoPadding>
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
