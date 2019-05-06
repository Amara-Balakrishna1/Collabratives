import React from "react";
import { Link } from "react-router-dom";
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
        pathName: "/",
        showCount: false
      },
      {
        label: "Pending Invitations",
        pathName: "/",
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
  onRenderCell = (item, index) => {
    console.log(item);
    return (
      <Link
        to={item.pathName}
        className={`ms-ListGridExample-tile ${index ? "" : "active"}`}
      >
        {item.label}
        {item.showCount ? <span>{`(${item.count})`}</span> : null}
      </Link>
    );
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
            <div className="col-xs-11">Collabrative</div>
          </div>
          {/* <i class="fa fa-bell" aria-hidden="true"></i> */}
          <div className="col-xs-2 pull-right notifications">
            <div className="col-xs-2">
              <Icon iconName="RingerSolid" className="ms-IconExample" />
            </div>
            <div className="col-xs-2">
              <Icon iconName="Settings" className="ms-IconExample" />
            </div>
            <div className="col-xs-2">
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
            <div
              style={{
                fontSize: "x-large",
                height: "48px",
                padding: "5px 0px 5px 30px",
                color: "#106EBE"
              }}
            >
              <Icon
                iconName="GlobalNavButton"
                className="ms-IconExample"
                onClick={this.toogleSidenav}
              />
            </div>
            <div
              ref={this.myRef}
              style={{ width: sideNav ? "220px" : "220px" }}
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
        </div>
      </div>
    );
  }
}
export default Header;
