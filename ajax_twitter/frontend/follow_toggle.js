class FollowToggle {
  constructor(el) {
    this.$el = $(`.${el}`);
    this.userId = this.$el.data("user-id");
    this.currentUserId = this.$el.data("current-user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on('click', (event) => this.handleClick(event));
  }
  
  render(){
    console.log(this);
    if (this.followState === true) {
      this.$el.text("Unfollow!");
    } else {
      this.$el.text("Follow!");
    }
  }
  
  handleClick(event){
    event.preventDefault();
    
    let method = this.followState ? 'DELETE' : 'POST';
          
    $.ajax({
      method: method,
      url: `/users/${this.userId}/follow`,
      dataType: 'JSON',
      // data: {
      //   followee_id: this.userId
        // follower_id: this.currentUserId
      // },
      // success: () => {
      //   console.log("Success!");
      //   this.followState = this.followState ? false : true;
      //   this.render();
      // }
    })
    .then((res) => console.log(res))
    .then(() => {
      console.log("Success!");
      this.followState = this.followState ? false : true;
      this.render();
    });
  }
}

module.exports = FollowToggle;
