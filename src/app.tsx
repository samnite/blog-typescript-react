import React, { FunctionComponent } from "react";
import { Switch, Route } from "react-router-dom";
import { StyledContainer } from "./components/shared/components";
import NotFound from "./components/pages/not-found";
import Home from "./components/pages/home";
import PostPage from "./components/pages/post-page";

interface OwnProps {}

type Props = OwnProps;

const App: FunctionComponent<Props> = () => {
  return (
    <StyledContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={PostPage} />
        <Route component={NotFound} />
      </Switch>
    </StyledContainer>
  );
};

export default App;
