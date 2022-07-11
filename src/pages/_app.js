// redux
import {Provider} from "react-redux";
import {store} from "../store";

// libraries
import { ToastContainer , toast } from 'react-toastify';
import { Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// designPatterns
import observable from "../components/observable";

// static files
import '../../public/styles/bundle.scss';

function MyApp({ Component, pageProps }) {

  const logger = (massage , type) => {
    console.log(`massage is : ${massage} & type of that is : ${type}`)
  }

  const toastify = (massage , type) => {
      toast(massage , {
          toastId: "toast",
          type : type,
          className : "lineHeight-3"
      })
  }

  observable.subscribe(logger);
  observable.subscribe(toastify);

  return (
      <Provider store={store}>
        <ToastContainer
          position="bottom-right"
          autoClose = {3000}
          rtl
          pauseOnFocusLoss
          pauseOnHover
          theme="dark"
          transition={Flip}
        />
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp;
