import React, { Component, FormEvent } from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";
import { createApolloFetch } from "apollo-fetch";
import { connect } from "react-redux";
import { logUserIn } from "../../store/user/users";

interface LoginPageProps {
  setCurrentUser: Function;
  history: any;
}

interface LoginPageState {
  username: String;
  password: String;
  [propName: string]: any;
}
class LoginPage extends Component<LoginPageProps, LoginPageState> {
  constructor(props: any) {
    super(props);
    this.state = { username: "", password: "", authflag: 1 };
  }

  handleSubmit:
    | ((event: FormEvent<HTMLFormElement>) => void)
    | undefined = async (event) => {
    event.preventDefault();
    const uri = "http://localhost:4000/graphql";
    const fetch = createApolloFetch({ uri });
    const { setCurrentUser } = this.props;
    const query = `
    query {
      user(username: "${this.state.username}") {
        id
        city {
          id
        }
      }
    }
    
    `;
    const result = await fetch({ query });
    if (result.data) {
      setCurrentUser(result.data.user);
      this.props.history.push("/home");
    } else {
      setCurrentUser(null);
    }
    console.log(result);
  };
  handleChange(event: { state: { username: String; password: String } }) {
    this.setState({
      username: event.state.username,
      password: event.state.password,
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                </Grid>
                <Grid item>
                  <form onSubmit={this.handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="text"
                          placeholder="Username"
                          fullWidth
                          name="username"
                          variant="outlined"
                          value={this.state.username}
                          onChange={(event) =>
                            this.setState({
                              [event.target.name]: event.target.value,
                            })
                          }
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={this.state.password}
                          onChange={(event) =>
                            this.setState({
                              [event.target.name]: event.target.value,
                            })
                          }
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (
  dispatch: (arg0: { payload: any; type: string }) => any
) => ({
  setCurrentUser: (user: any) => dispatch(logUserIn(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
