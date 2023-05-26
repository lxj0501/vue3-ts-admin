import { ResultCodeEnum } from "@/enums/httpEnum";

export function createSuccessResult<T>(result: T) {
  return {
    code: ResultCodeEnum.SUCCESS,
    result,
  };
}

export function createErrorResult(message = "Request failed") {
  return {
    code: ResultCodeEnum.ERROR,
    message,
  };
}
