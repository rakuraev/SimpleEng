
export const state = () =>({
     wordToPost:{},
     user:null
})

export const actions = {
    async POST_WORD_TO_DB({commit},word){
        try{
            return await this.$axios.$post('api/words/create_word',word)
        }catch(e){
            console.log(e)
        }
    },
    async userRegistration({commit},regData){
        try{
            return await this.$axios.$post('api/auth/register',regData)
        }catch(e){
             return e
        }
    }
}
export const mutations = {
    SET_USER_NAME_TO_STATE(state){
        function parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        
            return JSON.parse(jsonPayload).username;
        };
        state.user = parseJwt(localStorage.getItem('auth._token.local'))
    }
}
export const getters = {
    getUser(state){
        return state.user
    }
}