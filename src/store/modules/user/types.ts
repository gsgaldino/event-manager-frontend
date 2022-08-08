export interface Register {
  payload: {
    email: string;
    password: string;
  };
}

export interface Login {
  payload: {
    email: string;
    password: string;
  };
}

export interface LoginSuccess {
  payload: {
    id: string;
    email: string;
    password: string;
    created_at: string;
    dashboardToken: string;
  }
}
