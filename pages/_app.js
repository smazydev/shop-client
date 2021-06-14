import "bootstrap/dist/css/bootstrap.css";

const AppComponent = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>Header</h1>
      <Component {...pageProps} />
    </div>
  );
};

AppComponent.getInitialProps = async (appContext) => {
 
  const client = buildClient(appContext.ctx);
  const data = await client.get('/api/users/currentuser');
 
  return data;
};


export default AppComponent;