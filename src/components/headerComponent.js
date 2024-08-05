import styled from "styled-components";

export const Header = styled.div`
  color: white;
  background-color: #893101;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`;
export const AppIcon = styled.img`
  width: 100px;
  height: 40px;
  margin: 15px;
`;
export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;
export const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`;
