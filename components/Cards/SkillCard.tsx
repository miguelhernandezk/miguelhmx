import { Avatar, Card, Stack, Typography } from "@mui/material";
import JavascriptIcon from "@mui/icons-material/Javascript";

export default function SkillCard() {
  return (
    <Card>
      <Stack>
        <Avatar>
          <JavascriptIcon />
        </Avatar>
        <Typography variant="h4" component="h4">
          Javascript
        </Typography>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          impedit sint sed unde fuga hic reprehenderit aut labore recusandae
          tempora voluptatem, accusantium, omnis, architecto enim suscipit
          officia necessitatibus provident doloremque!
        </Typography>
      </Stack>
    </Card>
  );
}
