import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pm40sm21m201xk3ohec399/master',
    cache: new InMemoryCache()
})