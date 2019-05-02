import React, { Component } from 'react';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { DetailsList, DetailsListLayoutMode, SelectionMode } from 'office-ui-fabric-react/lib/DetailsList';
// import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: '16px'
  },
  fileIconCell: {
    textAlign: 'center',
    selectors: {
      '&:before': {
        content: '.',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0px',
        visibility: 'hidden'
      }
    }
  },
  fileIconImg: {
    verticalAlign: 'middle',
    maxHeight: '16px',
    maxWidth: '16px'
  },
  controlWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  exampleToggle: {
    display: 'inline-block',
    marginBottom: '10px',
    marginRight: '30px'
  },
  selectionDetails: {
    marginBottom: '20px'
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
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm'
};

class Collabrative extends Component {
  constructor(props) {
    super(props);
    const columns = [
      {
        key: 'column1',
        name: 'File Type',
        className: classNames.fileIconCell,
        iconClassName: classNames.fileIconHeaderIcon,
        ariaLabel: 'Column operations for File type, Press to sort on File type',
        iconName: 'Page',
        isIconOnly: true,
        fieldName: 'name',
        minWidth: 16,
        maxWidth: 16,
        onRender: (item) => <img src={item.iconName} className={classNames.fileIconImg} alt={`${item.fileType} file icon`} />
      },
      {
        key: 'column2',
        name: 'Name',
        fieldName: 'name',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',

        data: 'string',
        isPadded: true
      },
      {
        key: 'column3',
        name: 'Date Modified',
        fieldName: 'dateModifiedValue',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,

        data: 'number',
        onRender: (item) => <span>{item.dateModified}</span>,
        isPadded: true
      },
      {
        key: 'column4',
        name: 'Modified By',
        fieldName: 'modifiedBy',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: 'string',

        onRender: (item) => <span>{item.modifiedBy}</span>,
        isPadded: true
      },
      {
        key: 'column5',
        name: 'File Size',
        fieldName: 'fileSizeRaw',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: 'number',

        onRender: (item) => <span>{item.fileSize}</span>
      }
    ];
    this.state = {
      items: [{
        name: 'abc',
        dateModified: 'abc',
        modifiedBy: 'abc',
        fileSizeRaw: 'abc',
        iconName: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/pub_16x1.svg'
      }, {
        name: 'abc',
        dateModified: 'abc',
        modifiedBy: 'abc',
        fileSizeRaw: 'abc',
        iconName: 'https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/pub_16x1.svg'
      }],
      columns
    };
  }
  render() {
    const { columns, isCompactMode, items, isModalSelection } = this.state;
    return (<div>
      <div className="col-xs-12">
        <div className="col-xs-11">
          <CommandBarButton
            iconProps={{ iconName: 'Add' }}
            onClick={() => { console.log('adfasd'); }}
            text="Add Data"
          />

          <CommandBarButton
            iconProps={{ iconName: 'Add' }}
            onClick={() => { console.log('adfasd'); }}
            text="Invite Member"
          />

          <CommandBarButton
            iconProps={{ iconName: 'Shield' }}
            onClick={() => { console.log('adfasd'); }}
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
            <Persona imageInitials="AL" size={PersonaSize.size12} />
            <Persona imageInitials="AL" size={PersonaSize.size12} />
          </div>
        </div>
      </div>
      <div className="col-xs-12">
        <div className="col-xs-9">
          <div className="col-xs-12">
            <div style={{ fontSize: '50px' }}>235</div>
            <div>TB of Data</div>

          </div>
          <div className="col-xs-12">Collabrative Data</div>
          <div className="col-xs-12">
            <DetailsList
              items={items}
              compact={isCompactMode}
              columns={columns}
              selectionMode={isModalSelection ? SelectionMode.multiple : SelectionMode.none}
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
            <b>Alan Munger</b> removed pii information <a>ECG 22-25</a> yestarday at 2:30pm
           </div>
        </div>
      </div>
    </div >
    );
  }
}

export default Collabrative;
