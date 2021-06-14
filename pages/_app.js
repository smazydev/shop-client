import "bootstrap/dist/css/bootstrap.css";
import buildClient from "../api/build-client";
import Header from "../components/Header";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const data = await client.get("/api/users/currentuser");
  if (appContext.Component.getInitialProps) {
    const pageProps = await appContext.Component.getInitialProps(
      appContext.ctx
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
