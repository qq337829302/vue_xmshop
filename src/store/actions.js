export default {
    setUserInfo(context, userInfo) {
        context.commit("setUserInfo", userInfo);
    },
    setCartCount(context, num) {
        context.commit("setCartCount", num);
    },
}