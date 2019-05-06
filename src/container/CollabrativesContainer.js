import * as React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import moment from "moment";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import { FocusZone } from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import { CommandBarButton } from "office-ui-fabric-react/lib/Button";
import { getCollaboratives } from "../actions/collaborativesActions";
import "./CollborativesContainer.scss";

const ROWSPERPAGE = 3;
const MAXROWHEIGHT = 250;

class ListGridExample extends React.Component {
  state = {
    collaboratives: []
  };
  static getDerivedStateFromProps(nextProps) {
    return {
      collaboratives: nextProps.collaboratives || []
    };
  }
  render() {
    const { collaboratives } = this.state;
    return (
      <div className="Collabratives">
        <div className="col-xs-12 addRow">
          <CommandBarButton
            iconProps={{ iconName: "Add" }}
            onClick={() => {
              console.log("adfasd");
            }}
            text="Create New Collabrative"
          />
        </div>
        <div className="col-xs-12 count">
          My Collabratives({collaboratives.length})
        </div>
        <FocusZone>
          <List
            className="ms-ListGridExample Lists"
            items={collaboratives}
            getItemCountForPage={this.getItemCountForPage}
            getPageHeight={this.getPageHeight}
            renderedWindowsAhead={4}
            onRenderCell={this.onRenderCell}
          />
        </FocusZone>
      </div>
    );
  }
  componentDidMount() {
    const { getCollaboratives } = this.props;
    getCollaboratives();
  }
  getItemCountForPage = (itemIndex, surfaceRect) => {
    if (itemIndex === 0) {
      this.columnCount = 4;
      this.columnWidth = Math.floor(surfaceRect.width / this.columnCount);
      this.rowHeight = MAXROWHEIGHT;
    }

    return this.columnCount * ROWSPERPAGE;
  };

  getPageHeight = () => {
    return this.rowHeight * ROWSPERPAGE;
  };

  onRenderCell = (item, index) => {
    const { collaborators, metadata, collaborationId } = item;
    const { name, imageUrl, lastUpdatedAt } = Object(metadata);
    return (
      <div
        className="ms-ListGridExample-tile"
        data-is-focusable={true}
        style={{
          width: 100 / this.columnCount + "%",
          float: "left",
          display: "inline-block",
          margin: "10px 0px 0px 15px"
        }}
      >
        <div className="ms-ListGridExample-sizer">
          <div className="msListGridExample-padder">
            <Link to={{pathname: "/collabrative", collaborationId}}>
              <img src={imageUrl} alt="collabrativeImage" className="ms-ListGridExample-image" />
            </Link>
            <div className="name">{name}</div>
            <div className="info-1">
              Last Modified: {moment(lastUpdatedAt).format("ddd DD-MM-YY hh:mm A")}{" "}
            </div>
            <div className="info-2">
              <Icon iconName="People" className="ms-IconExample" />
              {collaborators.length} memebers
            </div>
          </div>
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  console.log(state);
  return {
    collaboratives: state.collaboratives.collaboratives
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCollaboratives: () => dispatch(getCollaboratives())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGridExample);
