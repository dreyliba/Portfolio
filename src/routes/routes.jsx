import Home from "../pages/Home";
import MainContainer from "../components/MainContainer";
import NotFound from "../components/NotFound";
import Resume from "../pages/Resume";
import Testimony from "../pages/Testimony";
import About from "../pages/About";
import Quotes from "../pages/Quotes";

const routes = [
  {
    path: "/",
    element: (
      <MainContainer>
        <Home />
      </MainContainer>
    ),
  },

  {
    path: "/about",
    element: (
      <MainContainer>
        <About />
      </MainContainer>
    ),
  },
  {
    path: "/resume",
    element: (
      <MainContainer>
        <Resume />
      </MainContainer>
    ),
  },
  {
    path: "/testimonials",
    element: (
      <MainContainer>
        <Testimony />
      </MainContainer>
    ),
  },
  {
    path: "/quotes",
    element: (
      <MainContainer>
        <Quotes />
      </MainContainer>
    ),
  },

  {
    path: "*",
    element: (
      <MainContainer>
        <NotFound />
      </MainContainer>
    ),
  },
];

export default routes;
