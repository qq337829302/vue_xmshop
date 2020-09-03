export default {
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo;
    },
    setCartCount(state, num) {
        state.cartCount = num;
    },
    logout(state) {
        state.userInfo = "";
    }
}