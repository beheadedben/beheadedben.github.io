import { router_init } from '/pkg/app.js'
async function asyncCall() {
  init().then(() => {
    router_init();
  })
}

asyncCall();