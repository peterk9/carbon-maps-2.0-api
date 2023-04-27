import { Request, Response } from 'express';

import { wattTimeClient } from '../services';

import { BaseController } from "./base-controller";

/**
 * @class GetBalancingAuthorityController
 */
export class GetBalancingAuthorityController extends BaseController {

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

        const latitude = request.query.latitude as string;
        const longitude = request.query.longitude as string;

        const isLatLongMissing = (latitude == null || latitude === '')
            || (longitude == null || longitude === '');

        if (isLatLongMissing) {
            throw new Error('Need balancingAuthority id or latitude, longitude points to do lookup.');
        }

        console.log(`[${this.constructor.name}] retrieving balancingAuthority details...`);

        await wattTimeClient.login();
        const data = await wattTimeClient.getRealTimeEmissions(latitude, longitude);

        const responseDto = {
            ba: data.ba,
            freq: data.freq,
            percent: Number.parseInt(data.percent),
            moer: data.moer,
            gcO2eqkWh: data.moer * (453.592 / 1000), // -> convert moer to g/kWh,
            point_time: data.point_time
        };

        return this.ok(response, responseDto);
    }

};