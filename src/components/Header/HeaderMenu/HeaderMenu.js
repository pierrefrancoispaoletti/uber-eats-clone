import React from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

const HeaderMenu = ({ setVisible, visible, children }) => {
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Image centered size="medium" src="/assets/images/kants.png" />
        <Menu.Item as="a">
          <Icon name="home" />
          Connexion
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Inscription
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher dimmed={visible}>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default HeaderMenu;
