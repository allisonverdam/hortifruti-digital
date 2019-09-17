import { createContext } from "react";

const ExampleContext = createContext({});

export const ExampleConsumer = ExampleContext.Consumer;

export const ExampleProvider = ExampleContext.Provider;

export default ExampleContext;
