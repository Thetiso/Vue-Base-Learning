export default function ({store, redirect}) {
    console.log(Date.now() + '=====middleware=====')
    console.log(store.user)
    if (!store.getters.authed) {
        // return redirect('/login')
    } else {
        // return redirect('/user')
    }
}
