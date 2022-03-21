class OrganisationResponse {
    static avcOrganisationCreate={
        responseCode: null,
        responseMessage: null
    }
    static avcOrganisationRead={
        responseCode: null,
        responseMessage: null,
        data:[]
    }
    static data={
        organisationId: null,
        organisationSerial: null,
        organisationName: null,
        organisationRegistrationNo: null,
        organisationRegistrationDate: null,
        organisationStreetAddress: null,
        organisationCity: null,
        organisationState: null,
        organisationPhone: null,
        organisationEmail: null,
        organisationType: null
    }
    static avcOrganisationReadSingle={
        organisationId: null,
        organisationSerial: null,
        organisationName: null,
        organisationRegistrationNo: null,
        organisationRegistrationDate: null,
        organisationStreetAddress: null,
        organisationCity: null,
        organisationState: null,
        organisationPhone: null,
        organisationEmail: null,
        organisationType: null,
        responseCode: null,
        responseMessage: null
    }
    static avcOrganisationUpdate={
        responseCode: null,
        responseMessage: null
    }
    static avcOrganisationUpdateStatus={
        responseCode: null,
        responseMessage: null

    }
}

export default OrganisationResponse