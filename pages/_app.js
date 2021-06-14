import "bootstrap/dist/css/bootstrap.css";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>Header {currentUser.email}</h1>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
 
  const client = buildClient(appContext.ctx);
  const data = await client.get('/api/users/currentuser');
  if (appContext.Component.getInitialProps){
  const pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data
  };
};


export default AppComponent;