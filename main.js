
/*
 * Consortia Engine API
 *
 * Consortia API defines operations and provides data that is used by consortia.io.
 */


var api = require("./routes/api.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/api/clusters", "GET", api.getApiClusters);
Sandbox.define("/api/clusters", "PUT", api.putApiClusters);
Sandbox.define("/api/clusters", "POST", api.postApiClusters);
Sandbox.define("/api/clusters/{id}", "GET", api.getApiClusters2);
Sandbox.define("/api/clusters/{id}", "DELETE", api.deleteApiClusters);
Sandbox.define("/api/clusters/{clusterId}/deploy", "POST", api.postApiClustersDeploy);
Sandbox.define("/api/clusters/{clusterId}/machine", "GET", api.getApiClustersMachine);
Sandbox.define("/api/clusters/{clusterId}/machine/{machineId}", "PUT", api.putApiClusters2);
Sandbox.define("/api/clusters/{clusterId}/machine/{machineId}", "DELETE", api.deleteApiClusters2);
Sandbox.define("/api/machines", "GET", api.getApiMachines);
Sandbox.define("/api/machines", "PUT", api.putApiMachines);
Sandbox.define("/api/machines", "POST", api.postApiMachines);
Sandbox.define("/api/machines/{id}", "GET", api.getApiMachines2);
Sandbox.define("/api/machines/{id}", "DELETE", api.deleteApiMachines);
Sandbox.define("/api/machines/{machineId}/credential/{credentialId}", "PUT", api.putApiMachines2);
Sandbox.define("/api/machines/{machineId}/credential/{credentialId}", "DELETE", api.deleteApiMachines2);
Sandbox.define("/api/machines/{machineId}/cluster/{clusterId}", "PUT", api.putApiMachines3);
Sandbox.define("/api/machines/{machineId}/cluster", "DELETE", api.deleteApiMachinesCluster);
Sandbox.define("/api/machines/{machineId}/nodes", "GET", api.getApiMachinesNodes);
Sandbox.define("/api/machines/{machineId}/nodes/{applicationNodeId}", "PUT", api.putApiMachines4);
Sandbox.define("/api/machines/{machineId}/nodes/{applicationNodeId}", "DELETE", api.deleteApiMachines3);
Sandbox.define("/api/credentials", "GET", api.getApiCredentials);
Sandbox.define("/api/credentials", "POST", api.postApiCredentials);
Sandbox.define("/api/credentials/{id}", "GET", api.getApiCredentials2);
Sandbox.define("/api/credentials/{id}", "DELETE", api.deleteApiCredentials);
Sandbox.define("/api/credentials/{credentialId}/machines/{machineId}", "PUT", api.putApiCredentials);
Sandbox.define("/api/credentials/{credentialId}/machines/{machineId}", "DELETE", api.deleteApiCredentials2);
Sandbox.define("/api/application-nodes", "GET", api.getApiApplication_nodes);
Sandbox.define("/api/application-nodes/{applicationNodeId}", "GET", api.getApiApplication_nodes2);
Sandbox.define("/api/application-nodes/{applicationNodeId}", "DELETE", api.deleteApiApplication_nodes);
Sandbox.define("/api/service-providers", "GET", api.getApiService_providers);
Sandbox.define("/api/service-providers/{serviceProviderId}", "GET", api.getApiService_providers2);
Sandbox.define("/api/membership-service-providers", "GET", api.getApiMembership_service_providers);
Sandbox.define("/api/membership-service-providers", "PUT", api.putApiMembership_service_providers);
Sandbox.define("/api/membership-service-providers", "POST", api.postApiMembership_service_providers);
Sandbox.define("/api/membership-service-providers/{membershipServiceProviderId}", "GET", api.getApiMembership_service_providers2);
Sandbox.define("/api/membership-service-providers/{membershipServiceProviderId}", "DELETE", api.deleteApiMembership_service_providers);
Sandbox.define("/api/membership-service-providers/{membershipServiceProviderId}/deploy", "POST", api.postApiMembership_service_providersDeploy);
Sandbox.define("/api/certificate-authorities", "GET", api.getApiCertificate_authorities);
Sandbox.define("/api/certificate-authorities", "PUT", api.putApiCertificate_authorities);
Sandbox.define("/api/certificate-authorities", "POST", api.postApiCertificate_authorities);
Sandbox.define("/api/certificate-authorities/{certificateAuthorityId}", "GET", api.getApiCertificate_authorities2);
Sandbox.define("/api/certificate-authorities/{certificateAuthorityId}", "DELETE", api.deleteApiCertificate_authorities);
Sandbox.define("/api/peers", "GET", api.getApiPeers);
Sandbox.define("/api/peers", "PUT", api.putApiPeers);
Sandbox.define("/api/peers", "POST", api.postApiPeers);
Sandbox.define("/api/peers/{peerId}", "GET", api.getApiPeers2);
Sandbox.define("/api/peers/{peerId}", "DELETE", api.deleteApiPeers);
Sandbox.define("/api/peers/{peerId}/deploy", "POST", api.postApiPeersDeploy);
Sandbox.define("/api/peers/{peerId}/channels/{channelId}", "PUT", api.putApiPeers2);
Sandbox.define("/api/peers/{peerId}/channels/{channelId}", "POST", api.postApiPeers2);
Sandbox.define("/api/orderers", "GET", api.getApiOrderers);
Sandbox.define("/api/orderers", "PUT", api.putApiOrderers);
Sandbox.define("/api/orderers", "POST", api.postApiOrderers);
Sandbox.define("/api/orderers/{ordererId}", "GET", api.getApiOrderers2);
Sandbox.define("/api/orderers/{ordererId}", "DELETE", api.deleteApiOrderers);
Sandbox.define("/api/ordering-service-providers", "GET", api.getApiOrdering_service_providers);
Sandbox.define("/api/ordering-service-providers", "PUT", api.putApiOrdering_service_providers);
Sandbox.define("/api/ordering-service-providers", "POST", api.postApiOrdering_service_providers);
Sandbox.define("/api/ordering-service-providers/{orderingServiceProviderId}", "GET", api.getApiOrdering_service_providers2);
Sandbox.define("/api/ordering-service-providers/{orderingServiceProviderId}", "DELETE", api.deleteApiOrdering_service_providers);
Sandbox.define("/api/ordering-service-providers/{orderingServiceProviderId}/deploy", "POST", api.postApiOrdering_service_providersDeploy);
Sandbox.define("/api/channels", "GET", api.getApiChannels);
Sandbox.define("/api/channels", "PUT", api.putApiChannels);
Sandbox.define("/api/channels", "POST", api.postApiChannels);
Sandbox.define("/api/environments", "GET", api.getApiEnvironments);
Sandbox.define("/api/environments", "PUT", api.putApiEnvironments);
Sandbox.define("/api/environments", "POST", api.postApiEnvironments);
Sandbox.define("/api/environments/{environmentId}", "GET", api.getApiEnvironments2);
Sandbox.define("/api/channels/{channelId}", "GET", api.getApiChannels2);
Sandbox.define("/api/channels/{channelId}", "DELETE", api.deleteApiChannels);
Sandbox.define("/api/channels/{channelId}/deploy", "POST", api.postApiChannelsDeploy);
Sandbox.define("/api/chaincodes", "GET", api.getApiChaincodes);
Sandbox.define("/api/chaincodes", "PUT", api.putApiChaincodes);
Sandbox.define("/api/chaincodes", "POST", api.postApiChaincodes);
Sandbox.define("/api/chaincodes/{chaincodeId}", "GET", api.getApiChaincodes2);
Sandbox.define("/api/chaincodes/{chaincodeId}/install", "POST", api.postApiChaincodesInstall);
Sandbox.define("/api/chaincodes/{chaincodeId}/instantiate", "POST", api.postApiChaincodesInstantiate);
Sandbox.define("/api/installed-chaincodes", "GET", api.getApiInstalled_chaincodes);
Sandbox.define("/api/installed-chaincodes/{installedChaincodeId}", "GET", api.getApiInstalled_chaincodes2);
Sandbox.define("/api/instantiated-chaincodes", "GET", api.getApiInstantiated_chaincodes);
Sandbox.define("/api/instantiated-chaincodes/{instantiatedChaincodeId}", "GET", api.getApiInstantiated_chaincodes2);
Sandbox.define("/api/scm-provider-auths", "GET", api.getApiScm_provider_auths);
Sandbox.define("/api/scm-provider-auths", "POST", api.postApiScm_provider_auths);
Sandbox.define("/api/scm-provider-auths/{scmProviderAuthId}", "GET", api.getApiScm_provider_auths2);
Sandbox.define("/api/repos", "GET", api.getApiRepos);