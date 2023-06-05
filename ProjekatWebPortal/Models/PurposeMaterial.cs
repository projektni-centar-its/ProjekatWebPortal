namespace ProjekatWebPortal.Models
{
    public class PurposeMaterial
    {
        public PurposeMaterial(int purposeMaterialId, string purposeMaterialName)
        {
            this.purposeMaterialId = purposeMaterialId;
            this.purposeMaterialName = purposeMaterialName;
        }
        public int purposeMaterialId { get; set; }
        public string purposeMaterialName { get; set; }
    }
}