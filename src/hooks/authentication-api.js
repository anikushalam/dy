import {
  useAuthenticationLoginMutation,
  useVerifyForgetOtpMutation,
  useVerifyForgetUserNameMutation,
  useForgetNewPasswordMutation,
  useInstituteRegisterMobileMutation,
  useInstituteVerifyPhoneNumberMutation,
  useInstituteRegisterAccountMutation,
  useInstituteCreatePasswordMutation,
  useUserRegisterMobileMutation,
  useUserVerifyPhoneNumberMutation,
  useUserRegisterAccountMutation,
  useUserCreatePasswordMutation,
  useSearchCodeForJoinQuery,
  useStudentDirectJoinMutation,
  useStaffDirectJoinMutation,
  useFileUploadMutation,
  useFileUploadAndUpdatedMutation,
  useExitsingUsernameVerifyQuery,
  useExitsingUsernameEditMutation,
  useExitsingEmailVerifyQuery,
} from "../services/Authentication/authenticationApiDynamic";

export const useAuthenticationLogin = () => {
  const [login] = useAuthenticationLoginMutation();
  return [login];
};

export const useVerifyForgetUserName = () => {
  const [forgetUsername] = useVerifyForgetUserNameMutation();
  return [forgetUsername];
};
export const useVerifyForgetOtp = () => {
  const [forgetOtp] = useVerifyForgetOtpMutation();
  return [forgetOtp];
};

export const useForgetNewPassword = () => {
  const [forgetNewPassword] = useForgetNewPasswordMutation();
  return [forgetNewPassword];
};

export const useInstituteRegisterMobile = () => {
  const [instituteRegisterMobile] = useInstituteRegisterMobileMutation();
  return [instituteRegisterMobile];
};

export const useInstituteVerifyPhoneNumber = () => {
  const [instituteVerifyPhoneNumber] = useInstituteVerifyPhoneNumberMutation();
  return [instituteVerifyPhoneNumber];
};
export const useInstituteRegisterAccount = () => {
  const [instituteRegisterAccount] = useInstituteRegisterAccountMutation();
  return [instituteRegisterAccount];
};

export const useInstituteCreatePassword = () => {
  const [instituteCreatePassword] = useInstituteCreatePasswordMutation();
  return [instituteCreatePassword];
};

export const useUserRegisterMobile = () => {
  const [userRegisterMobile] = useUserRegisterMobileMutation();
  return [userRegisterMobile];
};

export const useUserVerifyPhoneNumber = () => {
  const [userVerifyPhoneNumber] = useUserVerifyPhoneNumberMutation();
  return [userVerifyPhoneNumber];
};
export const useUserRegisterAccount = () => {
  const [userRegisterAccount] = useUserRegisterAccountMutation();
  return [userRegisterAccount];
};

export const useUserCreatePassword = () => {
  const [userCreatePassword] = useUserCreatePasswordMutation();
  return [userCreatePassword];
};

export const useSearchCodeForJoin = (args) => {
  const { data: searchCodeForJoin, refetch: searchCodeForJoinRefetch } =
    useSearchCodeForJoinQuery(args.data, { skip: args.skip });
  return { searchCodeForJoin, searchCodeForJoinRefetch };
};
export const useStudentDirectJoin = () => {
  const [studentDirectJoin] = useStudentDirectJoinMutation();
  return [studentDirectJoin];
};

export const useStaffDirectJoin = () => {
  const [staffDirectJoin] = useStaffDirectJoinMutation();
  return [staffDirectJoin];
};

export const useFileUpload = () => {
  const [oneFileUpload] = useFileUploadMutation();
  return [oneFileUpload];
};

export const useFileUploadAndUpdated = () => {
  const [oneFileUploadAndUpdated] = useFileUploadAndUpdatedMutation();
  return [oneFileUploadAndUpdated];
};

export const useExitsingUsernameVerify = (args) => {
  const {
    data: exitsingUsernameVerify,
    refetch: exitsingUsernameVerifyRefetch,
  } = useExitsingUsernameVerifyQuery(args.username, { skip: args.skip });
  return { exitsingUsernameVerify, exitsingUsernameVerifyRefetch };
};
export const useExitsingUsernameEdit = () => {
  const [exitsingUsernameEdit] = useExitsingUsernameEditMutation();
  return [exitsingUsernameEdit];
};

export const useExitsingEmailVerify = (args) => {
  const { data: exitsingEmailVerify, refetch: exitsingEmailVerifyRefetch } =
    useExitsingEmailVerifyQuery(args.email, { skip: args.skip });
  return { exitsingEmailVerify, exitsingEmailVerifyRefetch };
};
