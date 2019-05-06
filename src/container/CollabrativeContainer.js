import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { CommandBarButton } from "office-ui-fabric-react/lib/Button";
import { Icon } from "office-ui-fabric-react/lib/Icon";
import {
  Persona,
  PersonaSize,
  PersonaPresence
} from "office-ui-fabric-react/lib/Persona";
import { List } from "office-ui-fabric-react/lib/List";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode
} from "office-ui-fabric-react/lib/DetailsList";
// import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { mergeStyleSets } from "office-ui-fabric-react/lib/Styling";
import { getCollabrativeDetail } from "../actions/collaborativesActions";
import "./CollabrativeContainer.scss";

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: "16px"
  },
  fileIconCell: {
    textAlign: "center",
    selectors: {
      "&:before": {
        content: ".",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0px",
        visibility: "hidden"
      }
    }
  },
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "16px",
    maxWidth: "16px"
  },
  controlWrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  exampleToggle: {
    display: "inline-block",
    marginBottom: "10px",
    marginRight: "30px"
  },
  selectionDetails: {
    marginBottom: "20px"
  }
});
// const controlStyles = {
//   root: {
//     margin: '0 30px 20px 0',
//     maxWidth: '300px'
//   }
// };

const examplePersona = {
  // imageUrl: TestImages.personaFemale,
  imageInitials: "AL",
  text: "Annie Lindqvist",
  secondaryText: "Software Engineer",
  tertiaryText: "In a meeting",
  optionalText: "Available at 4:00pm"
};

class Collabrative extends Component {
  constructor(props) {
    super(props);
    const columns = [
      {
        key: "column1",
        name: "File Type",
        className: classNames.fileIconCell,
        iconClassName: classNames.fileIconHeaderIcon,
        ariaLabel:
          "Column operations for File type, Press to sort on File type",
        iconName: "Page",
        isIconOnly: true,
        fieldName: "name",
        minWidth: 16,
        maxWidth: 16,
        onRender: item => (
          <img
            src={item.iconName}
            className={classNames.fileIconImg}
            alt={`${item.fileType} file icon`}
          />
        )
      },
      {
        key: "column2",
        name: "Name",
        fieldName: "name",
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: "Sorted A to Z",
        sortDescendingAriaLabel: "Sorted Z to A",

        data: "string",
        isPadded: true
      },
      {
        key: "column3",
        name: "Description",
        fieldName: "dateModifiedValue",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,

        data: "number",
        onRender: item => <Icon title={item.description} iconName="Info" className="ms-IconExample" />,
        isPadded: true
      },
      {
        key: "column4",
        name: "Shared By",
        fieldName: "modifiedBy",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: "string",

        onRender: item => <span>{item.sharedBy}</span>,
        isPadded: true
      },
      {
        key: "column5",
        name: "Time Frame",
        fieldName: "fileSizeRaw",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: "number",

        onRender: item => <span>{item.timeFrame}</span>
      },
      {
        key: "column5",
        name: "Size",
        fieldName: "fileSizeRaw",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: "number",

        onRender: item => <span>{item.Size}</span>
      },
      {
        key: "column5",
        name: "Last Modified",
        fieldName: "fileSizeRaw",
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: "number",

        onRender: item => <span>{item.lastModified}</span>
      }
    ];
    const { collaborationId } = props.history.location;
    this.state = {
      collaborationId,
      columns
    };
  }
  componentDidMount() {
    const { getCollabrativeDetail } = this.props;
    const { collaborationId } = this.state;
    getCollabrativeDetail(collaborationId);
  }
  static getDerivedStateFromProps(nextProps) {
    console.log(nextProps);
    const { activityLog = [], dataSets = [] } = Object(
      nextProps.collaborativeDetail
    );
    return {
      items: dataSets || [],
      activityLog
    };
  }
  getName = id => {
    const { collaborators = [] } = this.props.collaborativeDetail;
    return (collaborators.filter(d => d.id === id)[0] || {}).userName || "";
  };
  render() {
    const {
      columns,
      isCompactMode,
      items,
      isModalSelection,
      activityLog
    } = this.state;
    const { collaborators = [] } = Object(this.props.collaborativeDetail);
    return (
      <div className="detail-collabarative">
        <div className="col-xs-12 addRow">
          <div className="col-xs-11">
            <CommandBarButton
              iconProps={{ iconName: "Add" }}
              onClick={() => {
                console.log("adfasd");
              }}
              text="Add Data"
            />

            <CommandBarButton
              iconProps={{ iconName: "Add" }}
              onClick={() => {
                console.log("adfasd");
              }}
              text="Invite Member"
            />

            <CommandBarButton
              iconProps={{ iconName: "Shield" }}
              onClick={() => {
                console.log("adfasd");
              }}
              text="Manage Permission"
            />
          </div>
          <div className="col-xs-1">
            <Icon iconName="Info" className="ms-IconExample" />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="col-xs-6">
            <Persona
              {...examplePersona}
              size={PersonaSize.size36}
              presence={PersonaPresence.offline}
              // onRenderSecondaryText={this._onRenderSecondaryText}
            />
          </div>
          <div className="col-xs-6">
            <div className="col-xs-2">
              <span>Collabrative(11):</span>
            </div>
            <div className="col-xs-2">
            <List
            className="ms-ListGridExample Lists"
            items={collaborators}
            getItemCountForPage={this.getItemCountForPage}
            getPageHeight={this.getPageHeight}
            renderedWindowsAhead={4}
            onRenderCell={(item) => (<Persona {...item} />)}
          />
            </div>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="col-xs-9">
            <div className="col-xs-12">
              <div style={{ fontSize: "50px" }}>235</div>
              <div>TB of Data</div>
            </div>
            <div className="col-xs-12">Collabrative Data</div>
            <div className="col-xs-12">
              <DetailsList
                items={items}
                compact={isCompactMode}
                columns={columns}
                selectionMode={
                  isModalSelection ? SelectionMode.multiple : SelectionMode.none
                }
                setKey="set"
                layoutMode={DetailsListLayoutMode.justified}
                isHeaderVisible
                ariaLabelForSelectionColumn="Toggle selection"
                ariaLabelForSelectAllCheckbox="Toggle selection for all items"
              />
            </div>
          </div>
          <div className="col-xs-3">
            <div>Activity</div>
            <div>
              {activityLog.map((d, i) => (
                <div className="activityLog" key={`test-${i}`}>
                  <b>{this.getName(d.actionUserId)}</b>
                  {d.actionInformation}
                  <span color="green">-</span>
                  <div>
                    on {moment(d.timeStamp).format("ddd DD-MMM-YYYY hh:mm A")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { collaborativeDetail } = state.collaboratives;
  return {
    collaborativeDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCollabrativeDetail: collaborationId =>
      dispatch(getCollabrativeDetail(collaborationId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collabrative);
