import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
let BackendService = class BackendService {
    constructor(http) {
        this.http = http;
    }
    /**
     *
     * @param url URL to call
     * @param params optional parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    get(url, params) {
        return this.invoke('GET', url, null, params);
    }
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    put(url, data, params) {
        return this.invoke('PUT', url, data, params);
    }
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    patch(url, data, params) {
        return this.invoke('PATCH', url, data, params);
    }
    /**
     *
     * @param url URL to call
     * @param data payload
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    post(url, data, params) {
        return this.invoke('POST', url, data, params);
    }
    /**
     *
     * @param url URL to call
     * @param params parameters such as HttpHeaders, HttpParams, reportProgress etc.
     */
    delete(url, params) {
        return this.invoke('DELETE', url, null, params);
    }
    invoke(method, url, data = {}, params) {
        const options = {
            body: data,
            params,
            headers: {
                'Accept-Language': 'en'
            }
        };
        if (!url) {
            throw new Error('No URL provided.');
        }
        const requestUrl = `${url}`;
        return this.http.request(method, requestUrl, options);
    }
};
BackendService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], BackendService);
export { BackendService };
//# sourceMappingURL=backend.service.js.map