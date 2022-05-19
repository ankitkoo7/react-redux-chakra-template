import CustomRoutes from "./routes";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CustomRoutes />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
