const cssFont = fetch(
  "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
).body;

const css = fetch(
  "https://raw.githubusercontent.com/cryptosynk/near-social-profile/main/css/main.css"
).body;

const Theme = styled.div`
  font-family: "Open Sans", sans-serif;
  ${cssFont}
  ${css}
`;

if (!cssFont || !css) return "Loading Fonts & CSS";

return (
  <Theme>
    <div className="container">
      <div className="content">
        <Widget
          src="saidulbadhon.testnet/widget/Profile.LeftSection"
          props={{ accountId, profile }}
        />

        <Widget
          src="saidulbadhon.testnet/widget/Profile.RightSection"
          props={{ accountId, profile }}
        />
      </div>
    </div>
  </Theme>
);
