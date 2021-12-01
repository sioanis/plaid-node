"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.54.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredError = exports.BaseAPI = exports.COLLECTION_FORMATS = exports.BASE_PATH = void 0;
// Some imports not used depending on template conditions
// @ts-ignore
const axios_1 = __importDefault(require("axios"));
exports.BASE_PATH = "https://production.plaid.com".replace(/\/+$/, "");
/**
 *
 * @export
 */
exports.COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};
/**
 *
 * @export
 * @class BaseAPI
 */
class BaseAPI {
    constructor(configuration, basePath = exports.BASE_PATH, axios = axios_1.default) {
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
}
exports.BaseAPI = BaseAPI;
;
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
class RequiredError extends Error {
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = "RequiredError";
    }
}
exports.RequiredError = RequiredError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEI7Ozs7Ozs7Ozs7R0FVRzs7Ozs7O0FBSUgseURBQXlEO0FBQ3pELGFBQWE7QUFDYixrREFBaUU7QUFFcEQsUUFBQSxTQUFTLEdBQUcsOEJBQThCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUU1RTs7O0dBR0c7QUFDVSxRQUFBLGtCQUFrQixHQUFHO0lBQzlCLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULEtBQUssRUFBRSxHQUFHO0NBQ2IsQ0FBQztBQVlGOzs7O0dBSUc7QUFDSCxNQUFhLE9BQU87SUFHaEIsWUFBWSxhQUE2QixFQUFZLFdBQW1CLGlCQUFTLEVBQVksUUFBdUIsZUFBVztRQUExRSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFZLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQzNILElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDM0Q7SUFDTCxDQUFDO0NBQ0o7QUFURCwwQkFTQztBQUFBLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILE1BQWEsYUFBYyxTQUFRLEtBQUs7SUFFcEMsWUFBbUIsS0FBYSxFQUFFLEdBQVk7UUFDMUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBREksVUFBSyxHQUFMLEtBQUssQ0FBUTtRQURoQyxTQUFJLEdBQW9CLGVBQWUsQ0FBQztJQUd4QyxDQUFDO0NBQ0o7QUFMRCxzQ0FLQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBUaGUgUGxhaWQgQVBJXG4gKiBUaGUgUGxhaWQgUkVTVCBBUEkuIFBsZWFzZSBzZWUgaHR0cHM6Ly9wbGFpZC5jb20vZG9jcy9hcGkgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMjAyMC0wOS0xNF8xLjU0LjJcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5cbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9jb25maWd1cmF0aW9uXCI7XG4vLyBTb21lIGltcG9ydHMgbm90IHVzZWQgZGVwZW5kaW5nIG9uIHRlbXBsYXRlIGNvbmRpdGlvbnNcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBnbG9iYWxBeGlvcywgeyBBeGlvc1Byb21pc2UsIEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBCQVNFX1BBVEggPSBcImh0dHBzOi8vcHJvZHVjdGlvbi5wbGFpZC5jb21cIi5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpO1xuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBjb25zdCBDT0xMRUNUSU9OX0ZPUk1BVFMgPSB7XG4gICAgY3N2OiBcIixcIixcbiAgICBzc3Y6IFwiIFwiLFxuICAgIHRzdjogXCJcXHRcIixcbiAgICBwaXBlczogXCJ8XCIsXG59O1xuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFJlcXVlc3RBcmdzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdEFyZ3Mge1xuICAgIHVybDogc3RyaW5nO1xuICAgIG9wdGlvbnM6IGFueTtcbn1cblxuLyoqXG4gKlxuICogQGV4cG9ydFxuICogQGNsYXNzIEJhc2VBUElcbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VBUEkge1xuICAgIHByb3RlY3RlZCBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbj86IENvbmZpZ3VyYXRpb24sIHByb3RlY3RlZCBiYXNlUGF0aDogc3RyaW5nID0gQkFTRV9QQVRILCBwcm90ZWN0ZWQgYXhpb3M6IEF4aW9zSW5zdGFuY2UgPSBnbG9iYWxBeGlvcykge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuYmFzZVBhdGggPSBjb25maWd1cmF0aW9uLmJhc2VQYXRoIHx8IHRoaXMuYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgUmVxdWlyZWRFcnJvclxuICogQGV4dGVuZHMge0Vycm9yfVxuICovXG5leHBvcnQgY2xhc3MgUmVxdWlyZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBuYW1lOiBcIlJlcXVpcmVkRXJyb3JcIiA9IFwiUmVxdWlyZWRFcnJvclwiO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWVsZDogc3RyaW5nLCBtc2c/OiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIobXNnKTtcbiAgICB9XG59XG4iXX0=