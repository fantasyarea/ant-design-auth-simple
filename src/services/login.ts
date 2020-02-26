import request from '@/utils/request';
import * as API from '@/api';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request(API.Public.Login.Base, {
    method: 'POST',
    data: params,
  });
}

export async function fakeAccountLogout() {
  return request(API.Public.Login.Exit, {
    method: 'POST',
  });
}

