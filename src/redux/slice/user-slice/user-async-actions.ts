import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserByIdService } from "src/core/services/user/user.service";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  (userId: number) => getUserByIdService(userId).then((res) => res.data)
)