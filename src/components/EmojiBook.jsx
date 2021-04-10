import React from "react";
import { Typography, IconButton, Snackbar, Slide } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Sheet from "react-modal-sheet";

import imgEmojiBook from "../assets/emojiBook.png";

function EmojiBook() {
  const [isOpen, setOpen] = React.useState(false);
  const [emoji, setEmoji] = React.useState("");

  const [openSnackBar, setOpenSnackBar] = React.useState(false);

  const handleOpenSnackBar = () => () => {
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleEmojiClick = (emoji) => {
    setEmoji(emoji);
    handleOpenSnackBar();
    setOpenSnackBar(true);
    setOpen(false);
  };

  return (
    <>
      <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 3 }}>
        <IconButton
          onClick={() => setOpen(true)}
          className="icon-button shadow-dark"
          style={{ backgroundColor: "white" }}
        >
          <img src={imgEmojiBook} style={{ width: 40 }} />
        </IconButton>
        <br />
        <Sheet
          isOpen={isOpen}
          onClose={() => setOpen(false)}
          snapPoints={[400]}
        >
          <Sheet.Container
            style={{
              left: 0,
              right: 0,
              margin: "auto",
              maxWidth: 700,
              borderRadius: "20px 20px 0px 0px",
              boxShadow: "0px 4px 32px 0px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fafafa",
            }}
          >
            <Sheet.Header />
            <Typography
              variant="h6"
              style={{ textAlign: "center", fontWeight: "700" }}
            >
              이모지를 클릭해보세요
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "gray", textAlign: "center" }}
            >
              해당 이모지가 복사됩니다.
            </Typography>
            <Sheet.Content style={{ padding: 16 }}>
              <div
                style={{
                  overflow: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div>
                  {[
                    "🛑",
                    "🎁",
                    "⬇️",
                    "🔉",
                    "☕️",
                    "📩",
                    "🧐",
                    "🥳",
                    "😍",
                    "🚀",
                    "😀",
                    "❌",
                    "🚀",
                    "👍",
                    "🧐",
                    "👋",
                    "👍",
                    "😍",
                    "👍",
                    "🧐",
                    "🧐",
                    "🧐",
                    "🧐",
                    "👍",
                    "👏",
                    "🚀",
                    "❌",
                    "😀",
                    "🧐",
                    "👍",
                    "👋",
                    "🙌",
                    "💛",
                    "✅",
                    "🎉",
                    "⭐️",
                    "😆",
                    "👋",
                    "😆",
                    "👋",
                    "❌",
                    "🥳",
                    "😀",
                    "😃",
                    "😄",
                    "😁",
                    "😆",
                    "😅",
                    "😂",
                    "🤣",
                    "😊",
                    "😇",
                    "🙂",
                    "🙃",
                    "😉",
                    "😌",
                    "😍",
                    "🥰",
                    "😘",
                    "😗",
                    "😙",
                    "😚",
                    "😋",
                    "😛",
                    "😝",
                    "😜",
                    "🤪",
                    "🤨",
                    "🧐",
                    "🤓",
                    "😎",
                    "🤩",
                    "🥳",
                    "😏",
                    "😒",
                    "😞",
                    "😔",
                    "😟",
                    "😕",
                    "🙁",
                    "😣",
                    "😖",
                    "😫",
                    "😩",
                    "🥺",
                    "😢",
                    "😭",
                    "🤠",
                    "😈",
                    "👿",
                    "👹",
                    "👺",
                    "🤡",
                    "💩",
                    "👻",
                    "💀",
                    "☠️",
                    "👽",
                    "👾",
                    "🤖",
                    "🎃",
                    "😺",
                    "😸",
                    "😹",
                    "😻",
                    "😼",
                    "😽",
                    "�",
                    "😿",
                    "😾",
                  ].map((emoji, i) => {
                    return (
                      <CopyToClipboard text={emoji}>
                        <IconButton
                          onClick={() => handleEmojiClick(emoji)}
                          className="icon-button shadow"
                          style={{
                            color: "black",
                            backgroundColor: "white",
                            width: 50,
                            height: 50,
                            margin: 6,
                          }}
                        >
                          <Typography variant="h6">{emoji}</Typography>
                        </IconButton>
                      </CopyToClipboard>
                    );
                  })}
                </div>
              </div>
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop
            onClick={() => setOpen(false)}
            style={{
              border: "none",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
          />
        </Sheet>
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={4000}
        onClose={handleCloseSnackBar}
        message={`${emoji}  를 복사했습니다. 붙여넣기로 사용하세요`}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackBar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
}

export default EmojiBook;
