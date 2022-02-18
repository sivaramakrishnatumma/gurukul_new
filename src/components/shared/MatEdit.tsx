import React, { FC } from "react";
import { FormControlLabel, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { blue } from "@mui/material/colors";
import { kebabize } from "../../utils/utility_fns";


interface IProps {
  id: string;
  page: string;
}

/**
 * @author
 * @function @MatEdit
 **/

export const MatEdit: FC<IProps> = (props) => {
  const { id, page } = props;
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate({
      pathname: `/app/${kebabize(page)}-update`,
      search: `?id=${id}`,
    });
  };

  return (
    <FormControlLabel
      label=""
      control={
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleEditClick}
        >
          <EditIcon style={{ color: blue[500] }} />
        </IconButton>
      }
    />
  );
};
