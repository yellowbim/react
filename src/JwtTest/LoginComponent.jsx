//
//
// loginClicked() {
//     AuthenticationService
//         .executeJwtAuthenticationService(this.state.username, this.state.password)
//         .then((response) => {
//             AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
//             this.props.history.push(`/welcome/${this.state.username}`)
//         }).catch( () =>{
//         this.setState({showSuccessMessage:false})
//         this.setState({hasLoginFailed:true})
//     })
// }