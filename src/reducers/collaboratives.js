import {
  GET_COLLABRATIVES,
  GET_COLLABRATIVEDETAILS
} from "../actions/collaborativesActions";

export default function visibilityFilter(state = {}, action) {
  switch (action.type) {
    case GET_COLLABRATIVES:
      return { ...state, collaboratives: action.data || [] };
    case GET_COLLABRATIVEDETAILS:
      return {
        ...state,
        collaborativeDetail: {
          collaborationId: "42b5d934-9717-492c-9a69-0a4d04c02b42",
          metadata: {
            name: "Cardiac AI",
            imageUrl:
              "https://sochakr01.blob.core.windows.net/images01/Cardiac-surgery-v2.png",
            createdBy: "810917c0-9083-4afa-b783-caa9010dc806",
            createdAt: "2019-05-04T05:22:16.357491Z",
            lastUpdatedAt: "2019-05-05T05:22:16.3574925Z"
          },
          details: {
            goal:
              "Cardiac data collaboration to understand patient data of cardiac arrests. Goal is to focus on public education to overcome the culture of inaction and increase rates of bystander cardiopulmonary resuscitation (CPR).",
            industries: ["HealthCare"],
            dataContext: "Patient data related to Cardiac issues",
            storageLocation:
              "https://ms.portal.azure.com/#@microsoft.onmicrosoft.com/resource/subscriptions/b2251f1c-ceaa-4ea2-bdfb-7adec3f037de/resourceGroups/dummy/providers/Microsoft.Storage/storageAccounts/dummy/overview",
            recommendedFormats: [".csv"],
            imageThumbnailUrl:
              "https://sochakr01.blob.core.windows.net/images01/Cardiac-surgery-v2.thumb.jpg",
            termsOfUse: "dummy terms"
          },
          collaborators: [
            {
              id: "810917c0-9083-4afa-b783-caa9010dc806",
              userName: "Alan Munger",
              emailId: "alanm@apollo.com",
              organizationName: "Apollo Hospitals",
              shortOrganizationName: "Apollo",
              status: "Accepted",
              role: "CollaborativeAdmin"
            },
            {
              id: "e497ab73-5d33-447d-aa36-ecd6354c9133",
              userName: "Anita Desai",
              emailId: "anita@esi.com",
              organizationName: "ESI Hospitals",
              shortOrganizationName: "ESI",
              status: "Accepted",
              role: "Collaborator"
            },
            {
              id: "cdd10df8-d899-4297-be52-c6f804fdb9ea",
              userName: "Manish Raghav",
              emailId: "manish@fortis.com",
              organizationName: "Fortis HealthCare",
              shortOrganizationName: "Fortis",
              status: "Pending",
              role: "Collaborator"
            }
          ],
          dataSets: [
            {
              name: "someValue",
              description: "someValue",
              sharedBy: "someValue",
              timeFrame: "someValue",
              Size: "someValue",
              lastModified: "someValue"
            },
            {
              name: "someValue",
              description: "someValue",
              sharedBy: "someValue",
              timeFrame: "someValue",
              Size: "someValue",
              lastModified: "someValue"
            },
            {
              name: "someValue",
              description: "someValue",
              sharedBy: "someValue",
              timeFrame: "someValue",
              Size: "someValue",
              lastModified: "someValue"
            }
          ],
          activityLog: [
            {
              actionUserId: "810917c0-9083-4afa-b783-caa9010dc806",
              actionInformation: "created collaboration",
              timeStamp: "2019-05-04T05:22:16.3640368Z"
            },
            {
              actionUserId: "810917c0-9083-4afa-b783-caa9010dc806",
              actionInformation: "invited Anita Desai as Collaborator",
              timeStamp: "2019-05-04T05:22:16.3640711Z"
            },
            {
              actionUserId: "810917c0-9083-4afa-b783-caa9010dc806",
              actionInformation: "invited Manish Raghav as Collaborator",
              timeStamp: "2019-05-04T05:22:16.3640812Z"
            },
            {
              actionUserId: "810917c0-9083-4afa-b783-caa9010dc806",
              actionInformation: "updated 'Goals'",
              timeStamp: "2019-05-05T01:22:16.364082Z"
            },
            {
              actionUserId: "e497ab73-5d33-447d-aa36-ecd6354c9133",
              actionInformation: "joined as Collaborator",
              timeStamp: "2019-05-05T03:22:16.364083Z"
            }
          ]
        }
      };
    default:
      return state;
  }
}
