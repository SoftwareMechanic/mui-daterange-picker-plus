import { format } from "date-fns";
import type { Locale } from "date-fns";
import {
  Divider,
  styled,
  Typography,
  Grid2,
} from "@mui/material";
import { Actions } from "./Actions";
import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import type { ModalCustomProps } from "../types/utils";
import type { Labels } from '../types';

// const PreviewDateTypoStyled = styled(Typography)(({ theme }) => ({
//   position: "relative",
//   top: "1px",
//   minWidth: "130px",
//   fontSize: 14,
//   lineHeight: "14px",
//   //color: theme.palette.grey[800],
// }));

// const PreviewDateMessageTypoStyled = styled(Typography)(({ theme }) => ({
//   position: "relative",
//   top: "1px",
//   minWidth: "130px",
//   fontSize: 14,
//   lineHeight: "14px",
//   //theme: theme,
//   //color: theme.palette.grey[500],
// }));

type FooterProps = {
  //theme: any;
  startDate?: Date;
  endDate?: Date;
  locale?: Locale;
  labels?: Labels;
} & Omit<ModalCustomProps, "onSubmit"> & {
    onSubmit: () => void;
  };

export const Footer = ({
  startDate,
  endDate,
  locale,
  labels,
  //theme,
  onCloseCallback,
  onSubmit,
  RangeSeparatorIcons,
  
}: FooterProps) => {
  const previewDate = (date: Date) => {
    return format(date, "dd MMMM yyyy", { locale });
  };

  const IconXs = RangeSeparatorIcons?.xs || KeyboardDoubleArrowDown;
  const IconMd = RangeSeparatorIcons?.md || KeyboardDoubleArrowRight;

  return (
    <>
      <Grid2
        xs
        container
        gap={"8px"}
        direction={{
          xs: "column",
          md: "row",
        }}
        justifyContent="flex-start"
        alignItems={"center"}
      >
        {startDate ? (
          <Typography
            textAlign={{
              xs: "center",
              md: "left",
            }}
          >
            {previewDate(startDate)}
          </Typography>
        ) : (
          <Typography
            textAlign={{
              xs: "center",
              md: "left",
            }}
          >
            {labels?.footer?.startDate || 'Start Date'}
          </Typography>
        )}

        <IconXs
          fontSize="small"
          sx={{
            //fill: theme.palette.grey[400],
            display: {
              xs: "block",
              md: "none",
            },
          }}
        />

        <IconMd
          fontSize="small"
          sx={{
            //fill: theme.palette.grey[400],
            display: {
              xs: "none",
              md: "block",
            },
          }}
        />

        {endDate ? (
          <Typography
            textAlign={{
              xs: "center",
              md: "left",
            }}
          >
            {previewDate(endDate)}
          </Typography>
        ) : (
          <Typography
            textAlign={{
              xs: "center",
              md: "left",
            }}
          >
            {labels?.footer?.endDate || 'End Date'}
          </Typography>
        )}
      </Grid2>

      <Grid2
        display={{
          xs: "block",
          md: "none",
        }}
      >
        <Divider orientation="horizontal" />
      </Grid2>

      <Grid2 xs="auto" container justifyContent={"flex-end"}>
        <Actions onCloseCallback={onCloseCallback} onSubmit={onSubmit} labels={labels?.actions} />
      </Grid2>
    </>
  );
};
