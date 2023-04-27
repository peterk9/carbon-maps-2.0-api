import { Request, Response } from 'express';

import { dataCenterLocationRepo } from '../database';

import { BaseController } from "./base-controller";

/**
 * @class GetAllDataCenterLocationsController
 */
export class GetAllDataCenterLocationsController extends BaseController {

    /**
 * @constructor
 */
    constructor() {
        super();
    }

    /**
     * @method executeImpl()
     */
    public async executeImpl(request: Request, response: Response) {

        console.log(`[${this.constructor.name}] retrieving all datacenter locations...`);

        const limit = parseInt(request.query.limit as string);
        const offset = parseInt(request.query.offset as string);

        const responseDto = await dataCenterLocationRepo.getAll({ limit, offset });

        return this.ok(response, responseDto);
    }

};