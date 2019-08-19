

/*
 * GET /api/clusters
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiClusters = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiClusters');
};

/*
 * PUT /api/clusters
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiClusters = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiClusters');
};

/*
 * POST /api/clusters
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiClusters = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiClusters');
};

/*
 * GET /api/clusters/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: string) - path parameter - ID of cluster to fetch
 */
exports.getApiClusters2 = function(req, res) {
	req.check('id', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiClusters2');
};

/*
 * DELETE /api/clusters/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: string) - path parameter - ID of cluster to delete
 */
exports.deleteApiClusters = function(req, res) {
	req.check('id', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * POST /api/clusters/{clusterId}/deploy
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * clusterId(type: string) - path parameter - ID of cluster
 */
exports.postApiClustersDeploy = function(req, res) {
	req.check('clusterId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api/clusters/{clusterId}/machine
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * clusterId(type: string) - path parameter - ID of cluster
 */
exports.getApiClustersMachine = function(req, res) {
	req.check('clusterId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiClustersMachine');
};

/*
 * PUT /api/clusters/{clusterId}/machine/{machineId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * clusterId(type: string) - path parameter - ID of cluster
 * machineId(type: string) - path parameter - ID of machine
 */
exports.putApiClusters2 = function(req, res) {
	req.check('clusterId', 'Invalid parameter').notEmpty();
	req.check('machineId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiClusters2');
};

/*
 * DELETE /api/clusters/{clusterId}/machine/{machineId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * clusterId(type: string) - path parameter - ID of cluster
 * machineId(type: string) - path parameter - ID of machine
 */
exports.deleteApiClusters2 = function(req, res) {
	req.check('clusterId', 'Invalid parameter').notEmpty();
	req.check('machineId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * GET /api/machines
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiMachines = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiMachines');
};

/*
 * PUT /api/machines
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiMachines = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiMachines');
};

/*
 * POST /api/machines
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiMachines = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiMachines');
};

/*
 * GET /api/machines/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: string) - path parameter - ID of machine to fetch
 */
exports.getApiMachines2 = function(req, res) {
	req.check('id', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiMachines2');
};

/*
 * DELETE /api/machines/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: string) - path parameter - ID of machine to delete
 */
exports.deleteApiMachines = function(req, res) {
	req.check('id', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * PUT /api/machines/{machineId}/credential/{credentialId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * machineId(type: string) - path parameter - ID of machine
 * credentialId(type: string) - path parameter - ID of credential
 */
exports.putApiMachines2 = function(req, res) {
	req.check('machineId', 'Invalid parameter').notEmpty();
	req.check('credentialId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiMachines2');
};

/*
 * DELETE /api/machines/{machineId}/credential/{credentialId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * machineId(type: string) - path parameter - ID of machine to remove credential from
 * credentialId(type: string) - path parameter - ID of credential
 */
exports.deleteApiMachines2 = function(req, res) {
	req.check('machineId', 'Invalid parameter').notEmpty();
	req.check('credentialId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * PUT /api/machines/{machineId}/cluster/{clusterId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * machineId(type: string) - path parameter - ID of machine
 * clusterId(type: string) - path parameter - ID of cluster
 */
exports.putApiMachines3 = function(req, res) {
	req.check('machineId', 'Invalid parameter').notEmpty();
	req.check('clusterId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiMachines3');
};

/*
 * DELETE /api/machines/{machineId}/cluster
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * machineId(type: string) - path parameter - ID of machine
 */
exports.deleteApiMachinesCluster = function(req, res) {
	req.check('machineId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * GET /api/machines/{machineId}/nodes
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * machineId(type: string) - path parameter - ID of machine
 */
exports.getApiMachinesNodes = function(req, res) {
	req.check('machineId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiMachinesNodes');
};

/*
 * PUT /api/machines/{machineId}/nodes/{applicationNodeId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * machineId(type: string) - path parameter - ID of machine
 * applicationNodeId(type: string) - path parameter - ID of node
 */
exports.putApiMachines4 = function(req, res) {
	req.check('machineId', 'Invalid parameter').notEmpty();
	req.check('applicationNodeId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiMachines4');
};

/*
 * DELETE /api/machines/{machineId}/nodes/{applicationNodeId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * machineId(type: string) - path parameter - ID of machine
 * applicationNodeId(type: string) - path parameter - ID of node
 */
exports.deleteApiMachines3 = function(req, res) {
	req.check('machineId', 'Invalid parameter').notEmpty();
	req.check('applicationNodeId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * GET /api/credentials
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiCredentials = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiCredentials');
};

/*
 * POST /api/credentials
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiCredentials = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiCredentials');
};

/*
 * GET /api/credentials/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: string) - path parameter - ID of credential to fetch
 */
exports.getApiCredentials2 = function(req, res) {
	req.check('id', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiCredentials2');
};

/*
 * DELETE /api/credentials/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * id(type: string) - path parameter - ID of credential to delete
 */
exports.deleteApiCredentials = function(req, res) {
	req.check('id', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * PUT /api/credentials/{credentialId}/machines/{machineId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * credentialId(type: string) - path parameter - ID of credential
 * machineId(type: string) - path parameter - ID of machine
 */
exports.putApiCredentials = function(req, res) {
	req.check('credentialId', 'Invalid parameter').notEmpty();
	req.check('machineId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiCredentials');
};

/*
 * DELETE /api/credentials/{credentialId}/machines/{machineId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * credentialId(type: string) - path parameter - ID of credential
 * machineId(type: string) - path parameter - ID of machine
 */
exports.deleteApiCredentials2 = function(req, res) {
	req.check('credentialId', 'Invalid parameter').notEmpty();
	req.check('machineId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.json({});
};

/*
 * GET /api/application-nodes
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiApplication_nodes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiApplication_nodes');
};

/*
 * GET /api/application-nodes/{applicationNodeId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * applicationNodeId(type: string) - path parameter - ID of application node to fetch
 */
exports.getApiApplication_nodes2 = function(req, res) {
	req.check('applicationNodeId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiApplication_nodes2');
};

/*
 * DELETE /api/application-nodes/{applicationNodeId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * applicationNodeId(type: string) - path parameter - ID of application node
 */
exports.deleteApiApplication_nodes = function(req, res) {
	req.check('applicationNodeId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.type('json');
	res.render('api_deleteApiApplication_nodes');
};

/*
 * GET /api/service-providers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiService_providers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiService_providers');
};

/*
 * GET /api/service-providers/{serviceProviderId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * serviceProviderId(type: string) - path parameter - ID of service provider to fetch
 */
exports.getApiService_providers2 = function(req, res) {
	req.check('serviceProviderId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiService_providers2');
};

/*
 * GET /api/membership-service-providers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiMembership_service_providers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiMembership_service_providers');
};

/*
 * PUT /api/membership-service-providers
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiMembership_service_providers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiMembership_service_providers');
};

/*
 * POST /api/membership-service-providers
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiMembership_service_providers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiMembership_service_providers');
};

/*
 * GET /api/membership-service-providers/{membershipServiceProviderId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * membershipServiceProviderId(type: string) - path parameter - ID of membership service provider to fetch
 */
exports.getApiMembership_service_providers2 = function(req, res) {
	req.check('membershipServiceProviderId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiMembership_service_providers2');
};

/*
 * DELETE /api/membership-service-providers/{membershipServiceProviderId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * membershipServiceProviderId(type: string) - path parameter - ID of membership service provider
 */
exports.deleteApiMembership_service_providers = function(req, res) {
	req.check('membershipServiceProviderId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.type('json');
	res.render('api_deleteApiMembership_service_providers');
};

/*
 * POST /api/membership-service-providers/{membershipServiceProviderId}/deploy
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * membershipServiceProviderId(type: string) - path parameter - ID of the membership service provider
 */
exports.postApiMembership_service_providersDeploy = function(req, res) {
	req.check('membershipServiceProviderId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api/certificate-authorities
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiCertificate_authorities = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiCertificate_authorities');
};

/*
 * PUT /api/certificate-authorities
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiCertificate_authorities = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiCertificate_authorities');
};

/*
 * POST /api/certificate-authorities
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiCertificate_authorities = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiCertificate_authorities');
};

/*
 * GET /api/certificate-authorities/{certificateAuthorityId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * certificateAuthorityId(type: string) - path parameter - ID of certificate authority to fetch
 */
exports.getApiCertificate_authorities2 = function(req, res) {
	req.check('certificateAuthorityId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiCertificate_authorities2');
};

/*
 * DELETE /api/certificate-authorities/{certificateAuthorityId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * certificateAuthorityId(type: string) - path parameter - ID of certificate authority
 */
exports.deleteApiCertificate_authorities = function(req, res) {
	req.check('certificateAuthorityId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.type('json');
	res.render('api_deleteApiCertificate_authorities');
};

/*
 * GET /api/peers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiPeers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiPeers');
};

/*
 * PUT /api/peers
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiPeers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiPeers');
};

/*
 * POST /api/peers
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiPeers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiPeers');
};

/*
 * GET /api/peers/{peerId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * peerId(type: string) - path parameter - ID of peer
 */
exports.getApiPeers2 = function(req, res) {
	req.check('peerId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiPeers2');
};

/*
 * DELETE /api/peers/{peerId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * peerId(type: string) - path parameter - ID of peer
 */
exports.deleteApiPeers = function(req, res) {
	req.check('peerId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.type('json');
	res.render('api_deleteApiPeers');
};

/*
 * POST /api/peers/{peerId}/deploy
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * peerId(type: string) - path parameter - ID of the peer
 */
exports.postApiPeersDeploy = function(req, res) {
	req.check('peerId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * PUT /api/peers/{peerId}/channels/{channelId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * peerId(type: string) - path parameter - ID of the peer
 * channelId(type: string) - path parameter - ID of the channel
 */
exports.putApiPeers2 = function(req, res) {
	req.check('peerId', 'Invalid parameter').notEmpty();
	req.check('channelId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /api/peers/{peerId}/channels/{channelId}
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * peerId(type: string) - path parameter - ID of the peer
 * channelId(type: string) - path parameter - ID of the channel
 */
exports.postApiPeers2 = function(req, res) {
	req.check('peerId', 'Invalid parameter').notEmpty();
	req.check('channelId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api/orderers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiOrderers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiOrderers');
};

/*
 * PUT /api/orderers
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiOrderers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiOrderers');
};

/*
 * POST /api/orderers
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiOrderers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiOrderers');
};

/*
 * GET /api/orderers/{ordererId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ordererId(type: string) - path parameter - ID of orderer
 */
exports.getApiOrderers2 = function(req, res) {
	req.check('ordererId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiOrderers2');
};

/*
 * DELETE /api/orderers/{ordererId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * ordererId(type: string) - path parameter - ID of orderer
 */
exports.deleteApiOrderers = function(req, res) {
	req.check('ordererId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.type('json');
	res.render('api_deleteApiOrderers');
};

/*
 * GET /api/ordering-service-providers
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiOrdering_service_providers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiOrdering_service_providers');
};

/*
 * PUT /api/ordering-service-providers
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiOrdering_service_providers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiOrdering_service_providers');
};

/*
 * POST /api/ordering-service-providers
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiOrdering_service_providers = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiOrdering_service_providers');
};

/*
 * GET /api/ordering-service-providers/{orderingServiceProviderId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * orderingServiceProviderId(type: string) - path parameter - ID of ordering service provider to fetch
 */
exports.getApiOrdering_service_providers2 = function(req, res) {
	req.check('orderingServiceProviderId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiOrdering_service_providers2');
};

/*
 * DELETE /api/ordering-service-providers/{orderingServiceProviderId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * orderingServiceProviderId(type: string) - path parameter - ID of ordering service provider
 */
exports.deleteApiOrdering_service_providers = function(req, res) {
	req.check('orderingServiceProviderId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.type('json');
	res.render('api_deleteApiOrdering_service_providers');
};

/*
 * POST /api/ordering-service-providers/{orderingServiceProviderId}/deploy
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * orderingServiceProviderId(type: string) - path parameter - ID of the ordering service provider
 */
exports.postApiOrdering_service_providersDeploy = function(req, res) {
	req.check('orderingServiceProviderId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api/channels
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiChannels = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiChannels');
};

/*
 * PUT /api/channels
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiChannels = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiChannels');
};

/*
 * POST /api/channels
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiChannels = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiChannels');
};

/*
 * GET /api/environments
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiEnvironments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiEnvironments');
};

/*
 * PUT /api/environments
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiEnvironments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiEnvironments');
};

/*
 * POST /api/environments
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiEnvironments = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiEnvironments');
};

/*
 * GET /api/environments/{environmentId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * environmentId(type: string) - path parameter - ID of environment
 */
exports.getApiEnvironments2 = function(req, res) {
	req.check('environmentId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiEnvironments2');
};

/*
 * GET /api/channels/{channelId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * channelId(type: string) - path parameter - ID of the channel to fetch
 */
exports.getApiChannels2 = function(req, res) {
	req.check('channelId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiChannels2');
};

/*
 * DELETE /api/channels/{channelId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * channelId(type: string) - path parameter - ID of channel
 */
exports.deleteApiChannels = function(req, res) {
	req.check('channelId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(204);

	// set response body and send
	res.type('json');
	res.render('api_deleteApiChannels');
};

/*
 * POST /api/channels/{channelId}/deploy
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * channelId(type: string) - path parameter - ID of the channel
 */
exports.postApiChannelsDeploy = function(req, res) {
	req.check('channelId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api/chaincodes
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiChaincodes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiChaincodes');
};

/*
 * PUT /api/chaincodes
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.putApiChaincodes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_putApiChaincodes');
};

/*
 * POST /api/chaincodes
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiChaincodes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiChaincodes');
};

/*
 * GET /api/chaincodes/{chaincodeId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * chaincodeId(type: string) - path parameter - ID of the chaincode to fetch
 */
exports.getApiChaincodes2 = function(req, res) {
	req.check('chaincodeId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiChaincodes2');
};

/*
 * POST /api/chaincodes/{chaincodeId}/install
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * chaincodeId(type: string) - path parameter - ID of the chaincode
 */
exports.postApiChaincodesInstall = function(req, res) {
	req.check('chaincodeId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * POST /api/chaincodes/{chaincodeId}/instantiate
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 * chaincodeId(type: string) - path parameter - ID of the chaincode
 */
exports.postApiChaincodesInstantiate = function(req, res) {
	req.check('chaincodeId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /api/installed-chaincodes
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiInstalled_chaincodes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiInstalled_chaincodes');
};

/*
 * GET /api/installed-chaincodes/{installedChaincodeId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * installedChaincodeId(type: string) - path parameter - ID of the installed chaincode to fetch
 */
exports.getApiInstalled_chaincodes2 = function(req, res) {
	req.check('installedChaincodeId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiInstalled_chaincodes2');
};

/*
 * GET /api/instantiated-chaincodes
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiInstantiated_chaincodes = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiInstantiated_chaincodes');
};

/*
 * GET /api/instantiated-chaincodes/{instantiatedChaincodeId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * instantiatedChaincodeId(type: string) - path parameter - ID of the instantiated chaincode to fetch
 */
exports.getApiInstantiated_chaincodes2 = function(req, res) {
	req.check('instantiatedChaincodeId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiInstantiated_chaincodes2');
};

/*
 * GET /api/scm-provider-auths
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiScm_provider_auths = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiScm_provider_auths');
};

/*
 * POST /api/scm-provider-auths
 *
 * Parameters (body params accessible on req.body for JSON, req.xmlDoc for XML):
 *
 */
exports.postApiScm_provider_auths = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_postApiScm_provider_auths');
};

/*
 * GET /api/scm-provider-auths/{scmProviderAuthId}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * scmProviderAuthId(type: string) - path parameter - ID of the SCM provider auth to fetch
 */
exports.getApiScm_provider_auths2 = function(req, res) {
	req.check('scmProviderAuthId', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiScm_provider_auths2');
};

/*
 * GET /api/repos
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 */
exports.getApiRepos = function(req, res) {
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('api_getApiRepos');
};