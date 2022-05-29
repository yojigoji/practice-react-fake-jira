import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import styled from "@emotion/styled";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <PageHeader>
        <HeaderLeft>123</HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </PageHeader>
      <Nav>nav</Nav>
      <Main>
        <ProjectListScreen />
      </Main>
      <Aside>aside</Aside>
      <Footer>footer</Footer>
    </Container>
  );
};

const PageHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderRight = styled.div``;

const Main = styled.main`
  grid-area: main;
`;

const Nav = styled.nav`
  grid-area: nav;
`;
const Aside = styled.aside`
  grid-area: aside;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100ch;
`;
