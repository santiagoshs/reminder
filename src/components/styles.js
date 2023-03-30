import styled from "@emotion/styled";
import colors from "../colors";

export const Inputext = styled.input`
  font-family: "Montserrat", sans-serif;
  padding: 20px 150px;
  border-radius: 18px;
  font-size: 20px;
`;

export const Inputsubmit = styled.input`
  font-family: "Montserrat", sans-serif;
  padding: 10px 40px;
  border-radius: 33px;
  font-weight: bold;
  font-size: 18px;
  background: ${colors.black};
  color: ${colors.white};
`;
export const Formstyle = styled.form`
  font-family: "Montserrat", sans-serif;
  padding-top: 12em;
  flex: auto;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 100;
  margin-top: -350px;
  gap: 10px;
`;
export const Tasklist = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-weight: bold;
  font-size: 20px;
  width: 300px;
  margin: 20px auto;
  word-break: break-all;
  position: relative;
  margin-top: 35px;
`;
export const Containerbtn = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  gap: 8px;
  margin-left: 10px;
`;
export const Forminput = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-weight: bold;
  font-size: 20px;
  gap: 8px;
  padding: 10px 20px;
  position: relative;
`;
export const Btnupdate = styled.button`
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;s
  font-weight: bold;
  color: ${colors.white};
  background: ${colors.greenUpdate};


`;
export const Inputupdate = styled.input`
  font-family: "Montserrat", sans-serif;
  padding: 10px 20px;
`;
export const Btndelete = styled.button`
  font-family: "Montserrat", sans-serif;
  padding: 8px 23px;
  background: ${colors.red};
  color: ${colors.white};
  border-radius: 20px;
`;
export const Btnedit = styled.button`
  font-family: "Montserrat", sans-serif;
  padding: 8px 23px;
  background: ${colors.black};
  color: ${colors.white};
  border-radius: 20px;
`;

export const Skewed = styled.div`
  font-family: "Montserrat", sans-serif;
  background: ${colors.bluenNavbar};
  position: relative;
  height: 50vh;
  border-bottom-left-radius: 50% 44%;
  border-bottom-right-radius: 50% 44%;
`;
