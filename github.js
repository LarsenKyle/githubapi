class Github {
  constructor() {
    this.client_id = "7fbcd1ef83769efb4470";
    this.clientSecret = "3ace8f53626cc67ca1b182a4eaac05f61ac053b6";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&${
        this.clientSecret
      }`
    );
    const profile = await profileResponse.json();
    return {
      profile: profile
    };
  }
}
