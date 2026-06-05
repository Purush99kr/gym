export const metadata = {
  title: "Contact Us | Gross Skilled Fitness Club",
  description:
    "Learn more about Gross Skilled Fitness Club, our trainers, equipment, facilities, and fitness programs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
