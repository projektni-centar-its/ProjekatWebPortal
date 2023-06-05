namespace ProjekatWebPortal.ViewModels
{
    /// <summary>
    /// osiromaseni materijali
    /// </summary>
    public class OsiromaseniMaterijali
    {
        /// <summary>
        /// Gets or sets the namena identifier.
        /// </summary>
        /// <value>
        /// The namena identifier.
        /// </value>
        public int namenaID { get; set; }

        /// <summary>
        /// Gets or sets the materijal identifier.
        /// </summary>
        /// <value>
        /// The materijal identifier.
        /// </value>
        public int materijalId { get; set; }

        /// <summary>
        /// Gets or sets the materijal naslov.
        /// </summary>
        /// <value>
        /// The materijal naslov.
        /// </value>
        public string materijalNaslov { get; set; }

        /// <summary>
        /// Gets or sets the materijal opis.
        /// </summary>
        /// <value>
        /// The materijal opis.
        /// </value>
        public string materijalOpis { get; set; }

        /// <summary>
        /// Gets the img path.
        /// </summary>
        /// <value>
        /// The img path.
        /// </value>
        public string ImgPath
        {
            get
            {
                if (this.ekstenzija == ".pdf")
                    return "~/Content/img/PDFicon.png";
                else if (this.ekstenzija == ".rar")
                    return "~/Content/img/RARicon.png";
                else if (this.ekstenzija == ".txt")
                    return "~/Content/img/TXTicon.png";
                else if (this.ekstenzija == ".jpg")
                    return "~/Content/img/JPGicon.png";
                else if (this.ekstenzija == ".gif")
                    return "~/Content/img/GIFicon.png";
                else if (this.ekstenzija == ".png")
                    return "~/Content/img/PNGicon.png";
                else if (this.ekstenzija == ".zip")
                    return "~/Content/img/ZIPicon.png";
                else if (this.ekstenzija == ".rtf")
                    return "~/Content/img/RTFicon.png";
                else if (this.ekstenzija == ".mp4")
                    return "~/Content/img/MP4icon.png";
                else return "Err";
            }
        }

        /// <summary>
        /// Gets or sets the ekstenzija.
        /// </summary>
        /// <value>
        /// The ekstenzija.
        /// </value>
        public string ekstenzija { get; set; }

        /// <summary>
        /// Gets or sets the tip materijala identifier.
        /// </summary>
        /// <value>
        /// The tip materijala identifier.
        /// </value>
        public int tipMaterijalaId { get; set; }

        /// <summary>
        /// Gets or sets the predmet identifier.
        /// </summary>
        /// <value>
        /// The predmet identifier.
        /// </value>
        public int? predmetId { get; set; }

        /// <summary>
        /// Gets or sets the modul identifier.
        /// </summary>
        /// <value>
        /// The modul identifier.
        /// </value>
        public int? modulId { get; set; }

        // obrati paznju!
        // odobravanje od strane UREDNIKA 
        public string odobreno { get; set; }
    }
}