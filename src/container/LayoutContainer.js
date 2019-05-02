import React from "react";
import { Link } from 'react-router-dom'
import {
  /*IPersonaSharedProps,*/ Persona,
  PersonaSize,
  PersonaPresence
} from "office-ui-fabric-react/lib/Persona";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { FocusZone } from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import user from "../images/img_avatar.png";

const examplePersona = {
  imageUrl: user
  // imageInitials: 'AR',
  // text: 'Annie Reid',
  // secondaryText: 'Designer',
  // tertiaryText: 'In a meeting',
  // optionalText: 'Available at 4:00pm',
  // showSecondaryText: true
};

class Header extends React.Component {
  myRef = React.createRef();
  state = {
    items: [
      {
        label: "My Collaboratives",
        pathName: '/collabratives',
        showCount: false
      },
      {
        label: "Pending Invitations",
        pathName: '/collabrative',
        showCount: true,
        count: 5
      }
    ],
    sideNav: true
  };
  toogleSidenav = () => {
    this.setState({
      sideNav: !this.state.sideNav
    });
  };
  onRenderCell = item => {
    console.log(item);
    return <Link to={item.pathName} className="ms-ListGridExample-tile">{item.label}{item.showCount ? <span>{`(${item.count})`}</span> : null}</Link>;
  };
  render() {
    const { props } = this;
    const { items, sideNav } = this.state;
    return (
      <div>
        <div className={`col-xs-12 ${props.className}`}>
          <div className="col-xs-4 title">
            <div className="col-xs-1">
              <Icon iconName="Dialpad" className="ms-IconExample" />
            </div>
            <div className="col-xs-9">Collabrative</div>
          </div>
          {/* <i class="fa fa-bell" aria-hidden="true"></i> */}
          <div className="col-xs-3 pull-right">
            <div className="col-xs-3">
              <Icon iconName="RingerSolid" className="ms-IconExample" />
            </div>
            <div className="col-xs-3">
              <Icon iconName="Settings" className="ms-IconExample" />
            </div>
            <div className="col-xs-3">
              <Persona
                {...examplePersona}
                size={PersonaSize.size28}
                presence={PersonaPresence.none}
              />
            </div>
          </div>
        </div>
        <div className="col-xs-12 content">
          <div className="sidenav col-xs-3">
            <div>
              <Icon
                iconName="GlobalNavButton"
                className="ms-IconExample"
                onClick={this.toogleSidenav}
              />
            </div>
            <div
              ref={this.myRef}
              style={{ width: sideNav ? "250px" : "250px" }}
            >
              <FocusZone>
                <List
                  className="ms-ListGridExample"
                  items={items}
                  onRenderCell={this.onRenderCell}
                />
              </FocusZone>
            </div>
          </div>
          <div className="col-xs-9">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default Header;
