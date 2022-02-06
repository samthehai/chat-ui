// import { Context } from '@nuxt/types';

// export default ({ app }: Context): unknown => {
//   const client = app.apolloProvider.defaultClient;
//   const token = app.$apolloHelpers.getToken();

//   if (token) {
//     client.wsClient.lazy = true;
//     client.wsClient.reconnect = true;
//     client.wsClient.connectionParams = () => ({ token });
//   }

//   return {};
// };
