class OrganisationRequest {
    static avcOrganisationCreate={
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
        organizationAccountNo: null
    }
    static avcOrganisationRead={
       readAll: null
    }
    static avcOrganisationReadSingle={
        organisationId: null
    }
    static avcOrganisationUpdate={
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
        organisationAccountNo:null
    }
    static avcOrganisationUpdateStatus={
        organisationId: null,
        organisationStatus: null
    }


}

export default OrganisationRequest