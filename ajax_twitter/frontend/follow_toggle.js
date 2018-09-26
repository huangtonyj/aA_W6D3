const APIUtil = require('./api_util.js');

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
    this.$el.text(this.followState ? "Unfollow!" : "Follow!");
  }
  
  handleClick(event){
    event.preventDefault();
      
    this.$el.prop("disabled", true);
  
    if (this.followState) {
      this.$el.text("Unfollowing...");
      APIUtil.unfollowUser(this.userId)
      .then(() => {
        this.followState = false;
        this.render();
      });
    } else {
      this.$el.text("Following...");
      APIUtil.followUser(this.userId)
      .then(() => {
        this.followState = true;
        this.render();
      });
    }
    this.$el.prop("disabled", false);
    
    // Before refactor:
    // let method = this.followState ? 'DELETE' : 'POST';
    
    // $.ajax({
    //   method: method,
    //   url: `/users/${this.userId}/follow`,
    //   dataType: 'JSON',
    //   // data: {
    //   //   followee_id: this.userId
    //     // follower_id: this.currentUserId
    //   // },
    //   // success: () => {
    //   //   console.log("Success!");
    //   //   this.followState = this.followState ? false : true;
    //   //   this.render();
    //   // }
    // })
    // .then(() => {
    //   this.followState = this.followState ? false : true;
    //   this.render();
    // });
  }
}

module.exports = FollowToggle;
