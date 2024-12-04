/* tslint:disable */
/* eslint-disable */
/**
 * The Life Care Planner
 * The application is for developing and generating life care planning tables.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * * `hr` - Human Resources
 * * `finance` - Finance
 * * `engineering` - Engineering
 * * `marketing` - Marketing
 * * `sales` - Sales
 * @export
 */
export const DepartmentEnum = {
    Hr: 'hr',
    Finance: 'finance',
    Engineering: 'engineering',
    Marketing: 'marketing',
    Sales: 'sales'
} as const;
export type DepartmentEnum = typeof DepartmentEnum[keyof typeof DepartmentEnum];


export function instanceOfDepartmentEnum(value: any): boolean {
    for (const key in DepartmentEnum) {
        if (Object.prototype.hasOwnProperty.call(DepartmentEnum, key)) {
            if (DepartmentEnum[key as keyof typeof DepartmentEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DepartmentEnumFromJSON(json: any): DepartmentEnum {
    return DepartmentEnumFromJSONTyped(json, false);
}

export function DepartmentEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepartmentEnum {
    return json as DepartmentEnum;
}

export function DepartmentEnumToJSON(value?: DepartmentEnum | null): any {
    return value as any;
}

export function DepartmentEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): DepartmentEnum {
    return value as DepartmentEnum;
}
